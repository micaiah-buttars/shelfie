module.exports = {
    get: (req, res) => {
        const db = req.app.get("db")

        db.get_inventory()
        .then(products => {
            res.status(200).send(products)
        })
    },

    post: (req, res) => {
        const db = req.app.get("db")
        const {name, price, img} = req.body

        db.create_product([name, price, img])
        .then(products => {
            res.status(200).send(products)
        })
    },

    delete: (req, res) => {
        const db = req.app.get("db")
        const {id} = req.params

        db.delete_product(id)
        .then(
            res.status(200).send(`product deleted`)
        )
    }




}