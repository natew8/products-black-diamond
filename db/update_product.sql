UPDATE product
SET description = $2
WHERE product_id = $1

returning*;