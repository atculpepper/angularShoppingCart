export class Product {
  id: number;
  name: string;
  description: string;
  price: number;
  img: string;
  quantity: number;
  inCart: boolean = true;

  constructor(
    id,
    name,
    description = '',
    price = 0,
    img = 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR_mJSe5PJSR6K6zP2AyMLAD1qY6tJWNvwWRHhU1DmtXFFu7IS1Lps9sQ5Xlb0wgq-D-C5JZevGgaXRDL11ZbkqpI0P8ca_a9-TaH7qDI8&usqp=CAc',
    quantity = 0,
    inCart = true
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.img = img;
    this.quantity = quantity;
    this.inCart = inCart;
  }
}
