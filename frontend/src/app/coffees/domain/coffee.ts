export class Coffee {
  title: string
  description: string
  imageUrl: string
  type: string

  private addedAt: Date

  constructor(data: any) {
    this.title = data.title
    this.description = data.description
    this.imageUrl = data.imageUrl
    this.addedAt = data.addedAt
    this.type = data.type
  }

  getDate() {
    return this.addedAt
  }
}
