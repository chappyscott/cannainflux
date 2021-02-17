import {Component, OnInit, AfterViewInit, OnDestroy, ViewChildren, ViewChild, ElementRef} from '@angular/core';
import {FormBuilder, FormGroup, FormControl, FormArray, Validators, FormControlName} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

import {Observable, Subscription, fromEvent, merge} from 'rxjs';

import {Product} from './products';
import {ProductsService} from './products-service';

import {GenericValidator} from '../shared/generic-validator';

import {COMMA, ENTER} from '@angular/cdk/keycodes';


@Component({
  templateUrl: './products-edit.component.html',
  styleUrls: ['./products-edit.component.css']
})


export class ProductsEditComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChildren(FormControlName, {read: ElementRef}) formInputElements: ElementRef[] | any;


  pageTitle = 'Create an Product';
  // HTML Only variables - stored as an array but for error checking on the users

  errorMessage: string | any;
  productForm: FormGroup | any;

  productType: any;

  product: Product | any;

  private sub: Subscription | any;
  sts: any[] | any;
  onChange : boolean | any;

  // Use with the generic validation message class
  displayMessage: { [key: string]: string } = {};
  private validationMessages: { [key: string]: { [key: string]: string } };
  private genericValidator: GenericValidator;

  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];


  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private productService: ProductsService) {

    // Defines all of the validation messages for the form.
    // These could instead be retrieved from a file or database.
    this.validationMessages = {
      productName: {
        required: 'Product name is required.',
        minlength: 'Product name must be at least three characters.',
        maxlength: 'Product name cannot exceed 50 characters.'
      },
      productPrice: {
        required: 'Product Start Date is required.'
      }
    };

    // Define an instance of the validator for use with this form,
    // passing in this form's set of validation messages.
    this.genericValidator = new GenericValidator(this.validationMessages);
  }


  /*************************
   * ngOnInit SECTION
   *************************/

  ngOnInit(): void {


    this.productForm = this.fb.group({
      productName: ['', [Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50)]],
      productType: '',
      productNotes: '',
      productPrice: 0,
    });

    // Read the productId from the route parameter
    this.sub = this.route.paramMap.subscribe(
      params => {
        const productId = +params.get('id')!;  // had to override the compiler... with the !
        this.getProduct(productId);
      }
    );

  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  ngAfterViewInit(): void {
    // Watch for the blur product from any input element on the form.
    // This is required because the valueChanges does not provide notification on blur
    const controlBlurs: Observable<any>[] = this.formInputElements
      .map((formControl: ElementRef) => fromEvent(formControl.nativeElement, 'blur'));

    // Merge the blur product observable with the valueChanges observable
    // so we only need to subscribe once.
    merge(this.productForm.valueChanges, ...controlBlurs)
      // .pipe(
      //   debounceTime(1000)
      // )
      .subscribe(value => {
        this.displayMessage = this.genericValidator.processMessages(this.productForm);
      });

  }

  initName(name: string, val: string[] = []): FormControl {
    console.log("NAME VAL:", name, val);
    return this.fb.control({name, val});
  }

  validateArrayNotEmpty(c: FormControl) {
    if (c.value && c.value.length === 0) {
      return {
        validateArrayNotEmpty: {valid: false}
      };
    }
    return null;
  }

  getProduct(id: number): void {
    this.productService.getProduct(id).subscribe({
      next: (product: Product) => this.displayProduct(product),
      error: err => this.errorMessage = err
    });
  }

  displayProduct(product: Product): void {
    if (this.productForm) {
      this.productForm.reset();
    }

    this.product = product;

    if (this.product.id != 0) {
      this.pageTitle = `Edit a product: ${this.product.productName}`;
    }

    // Update the data on the form
    this.productForm.patchValue({
      productName: this.product.productName,
      productType: this.product.productType,
      productNotes: this.product.productNotes,
      productPrice: this.product.productPrice,
    });
  }

  deleteProduct(): void {
    if (this.product.id === 0) {
      // Don't delete, it was never saved.
      this.onSaveComplete();
    } else {
      if (confirm(`Really delete the product: ${this.product.productName}?`)) {
        this.productService.deleteProduct(this.product.id)
          .subscribe({
            next: () => this.onSaveComplete(),
            error: err => this.errorMessage = err
          });
      }
    }
  }


  // SAVE FORM DATA HERE BELOW
  // ----------------------------------

  saveProduct(): void {
    if (this.productForm.valid) {
      if (this.productForm.dirty) {
        console.log("FORM VALUES SUMBITTED:", JSON.stringify(this.productForm.value));
        const p = {...this.product, ...this.productForm.value};

        if (p.id === 0) {
          this.productService.createProduct(p)
            .subscribe({
              next: () => this.onSaveComplete(),
              error: err => this.errorMessage = err
            });
        } else {
          console.log("FORM DATA:", p);
          this.productService.updateProduct(p)
            .subscribe({
              next: () => this.onSaveComplete(),
              error: err => this.errorMessage = err
            });
        }
      } else {
        this.onSaveComplete();
      }
    } else {
      this.errorMessage = 'Please correct the validation errors.';
    }
  }

  onSaveComplete(): void {
    // Reset the form to clear the flags
    this.productForm.reset();
    this.router.navigate(['/products']);
  }
}

