module.exports = {
    getAll: (req, res) => {
        const db = req.app.get('db')
        db.read_products().then(products => {
            res.status(200).send(products)
        }).catch(err => {
            res.status(500).send('Something Went Wrong.')
        })
    },
    getOne: (req, res) => {
        const db = req.app.get('db')
        const { product_id } = req.params
        db.read_product([product_id]).then(product => {
            res.status(200).send(product)
        }).catch(err => {
            res.status(500).send('Something Went Wrong.')
        })
    },
    create: (req, res) => {
        const db = req.app.get('db')
        const { name, description, price, first_image_url, second_image_url } = req.body
        db.create_product([name, description, price, first_image_url, second_image_url]).then(product => {
            res.status(200).send(product)
        }).catch(err => {
            res.status(500).send('Something Went Wrong')
        })
    },
    update: (req, res) => {
        const db = req.app.get('db')
        const { product_id } = req.params
        const { description } = req.body
        db.update_product([product_id, description]).then(product => {
            res.status(200).send(product)
        }).catch(err => {
            res.status(500).send('Something Went Wrong')
        })
    },
    delete: (req, res) => {
        const db = res.app.get('db')
        const { product_id } = req.params
        db.delete_product([product_id]).then(products => {
            res.status(200).send(products)
        })
    }
}