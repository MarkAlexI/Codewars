SELECT
  manager_id,
  ARRAY_AGG(CONCAT(name, ' (', id, ')') ORDER BY id) AS employee_names
FROM
  employees
WHERE
  manager_id IS NOT NULL
GROUP BY
  manager_id
ORDER BY
  manager_id;
