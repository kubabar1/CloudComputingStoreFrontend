import DeviceType from './DeviceType';

class DeviceDTO {
  id: string;
  type: DeviceType;
  brand: string;
  model: string;
  rating: number;
  price: number;
  specialOffer: boolean;
  imageName: string;

  constructor(id: string, type: DeviceType, brand: string, model: string,
    rating: number, price: number, imageName: string,
    specialOffer: boolean = false) {
      this.id = id;
      this.type = type;
      this.brand = brand;
      this.model = model;
      this.rating = rating;
      this.price = price;
      this.specialOffer = specialOffer;
      this.imageName = imageName;
  }

}

export default DeviceDTO;
