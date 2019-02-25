export const appImagesUrl = 'https://api.spacesib.ru/uploads';

export class Tools {
  getImageUrl(_item: string) {
    return `${appImagesUrl}/${_item}`;
  }
}
