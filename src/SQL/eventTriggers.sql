-- event trigger for favorites

CREATE OR REPLACE FUNCTION check_fav()
RETURNS TRIGGER
LANGUAGE plpgsql
as $$
DECLARE
incoming_user_id text;
incoming_recipe_id INTEGER;
BEGIN
SELECT new.user_id into incoming_user_id;
SELECT new.recipe_id into incoming_recipe_id;
IF EXISTS(SELECT f.user_id, f.recipe_id from favorites f WHERE f.recipe_id = incoming_recipe_id AND f.user_id = incoming_user_id)
    THEN
    RAISE EXCEPTION 'user % cannot add recipe: % twice in your favorite list', incoming_user_id, incoming_recipe_id;
    END IF;
RETURN NEW;
END;
$$


CREATE TRIGGER check_duplicate_fav
BEFORE INSERT ON "favorites"
FOR EACH ROW
EXECUTE PROCEDURE check_fav()





-- =============== SEARCH RECIPES tracked custom sql =======================

CREATE OR REPLACE FUNCTION search_recipes(search text)
RETURNS SETOF recipes AS $$
    SELECT *
    FROM recipes
    WHERE
      title ilike ('%' || search || '%')
      OR category ilike ('%' || search || '%')
      OR ingrediants :: text ilike ANY(ARRAY['%' || search || '%'])
$$ LANGUAGE sql STABLE;