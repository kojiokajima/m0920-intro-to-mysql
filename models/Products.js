const db = require('../util/database')

module.exports = class Product{
  constructor(id, title, price, description, imageUrl){
    this.id = id
    this.title = title
    this.price = price
    this.description = description,
    this.imageUrl = imageUrl
  }

  save(){
    db.execute(
      `INSERT INTO products (title, price, description, imageUrl) VALUES (?, ?, ?, ?)`,
      [this.title, this.price, this.description, this.imageUrl])
  }

  static fetchAll() {
    return db.execute('SELECT * FROM products')
  }

  //alternative way of fetching all
  // static fetchAllSync() {
  //   return JSON.parse(fs.readFileSync(dataPath))
  // }

  static findById(id){
    return db.execute('SELECT * FROM products WHERE products.id = ?', [id]) 
  }

  static deleteById(id){
    return db.execute('DELETE FROM products WHERE products.id = ?', [id])
  }
}