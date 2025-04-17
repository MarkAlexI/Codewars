--SELECT product_id
--FROM product_tags
--WHERE tag IN ('Electronics', 'Gadgets')
--GROUP BY product_id
--HAVING COUNT(DISTINCT tag) = 2
--ORDER BY product_id DESC;
SELECT DISTINCT p1.product_id
FROM product_tags p1
INNER JOIN product_tags p2 ON p1.product_id = p2.product_id
WHERE p1.tag = 'Electronics'
  AND p2.tag = 'Gadgets'
ORDER BY p1.product_id DESC;
