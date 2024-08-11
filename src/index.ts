export interface DistlintOptions {
  include?: string | string[];
  exclude?: string | string[];
}

export async function distlint(options?: DistlintOptions | DistlintOptions[]) {
  if (Array.isArray(options)) {
    for (const singleOptions of options) {
      await distlint(singleOptions);
    }
  }
}
