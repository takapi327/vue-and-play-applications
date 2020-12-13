export class ReactiveFormControl {

  constructor(
    public  value:      any,
    private validators: Function[] = []
  ) {}

  public errors: any[] = []

  public reset(): void {
    this.value  = null
    this.errors = []
  }

  public validate(): void {
    this.errors = []

    if (!this.validators || !this.validators.length) return;

    this.validators.forEach(validator => {
      const error = validator.call(this, this.value)
      if (error !== null) {
        this.errors.push(error)
      }
    })
  }
}
