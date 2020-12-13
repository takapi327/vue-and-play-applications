import { ReactiveFormControl } from './ReactiveFormControl'

export default class ReactiveForm {
  public controls: { [name: string]: ReactiveFormControl } = {}

  public validate() {
    for (const key in this.controls) {
      this.controls[key].validate()
    }
  }

  public get errors() {
    let retval: any = {}
    for (const key in this.controls) {
      if (this.controls[key].errors != null) {
        retval[key] = this.controls[key].errors
      }
    }
    return retval
  }

  public get hasErrors() {
    let retval: number = 0

    for (const key in this.controls) {
      if (this.controls[key].errors != null) {
        retval += this.controls[key].errors.length
      }
    }
    return retval
  }
}
