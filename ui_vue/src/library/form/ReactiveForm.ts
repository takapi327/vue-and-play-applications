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

    Object.keys(this.controls).map(key => {
      if (this.controls[key].errors !== null) {
        retval[key] = this.controls[key].errors
      }
    })
    return retval
  }

  public get hasErrors(): boolean {
    let retval: boolean = true

    Object.keys(this.controls).map(key => {
      if (this.controls[key].errors.length > 0) {
        retval = true
      } else {
        retval = false
      }
    })

    return retval
  }

}
