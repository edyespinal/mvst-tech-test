export class Coffee {
  title: string;
  description: string;
  private addedAt: Date;

  constructor(data: any) {
    this.title = data.title;
    this.description = data.description;
    this.addedAt = data.addedAt;
  }

  getDate() {
    return this.addedAt;
  }
}
