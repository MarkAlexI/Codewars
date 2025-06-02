SELECT u.id AS user_id, u.name
FROM users u
JOIN orders o ON u.id = o.user_id
GROUP BY u.id, u.name
HAVING COUNT(DISTINCT o.product_id) = (SELECT COUNT(*) FROM products)
ORDER BY u.id DESC;
