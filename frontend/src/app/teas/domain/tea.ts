export class Tea {
  title: string
  description: string
  imageUrl: string

  private addedAt: Date

  constructor(data: any) {
    this.title = data.title
    this.description = data.description
    this.imageUrl = data.imageUrl
    this.addedAt = data.addedAt
  }

  getData() {
    return this.addedAt
  }
}
