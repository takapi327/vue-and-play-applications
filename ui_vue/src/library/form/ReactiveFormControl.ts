export class ReactiveFormControl {

  constructor(
    public  value:      any,
    private validators: Function[] = []
  ) {}

  public errors: any[] = []

  public reset() {
    this.value  = null
    this.errors = []
  }

  public validate() {
    this.errors = []
    if (!this.validators || !this.validators.length) return;
    this.validators.forEach(validator => {
      const error = validator.call(this, this.value)
      if (error != null) {
        if (!this.errors) this.errors = []
        this.errors.push(error)
      }
    })
  }
}
