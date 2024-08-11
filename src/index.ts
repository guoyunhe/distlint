export interface DistlintOptions {
  lastNameUpperCase?: boolean;
}

export function distlint(firstName: string, lastName: string, options?: DistlintOptions) {
  if (options?.lastNameUpperCase) {
    return firstName + ' ' + lastName.toLocaleUpperCase();
  }
  return firstName + ' ' + lastName;
}
