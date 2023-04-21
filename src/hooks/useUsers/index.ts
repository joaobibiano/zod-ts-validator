import { useState, useEffect } from "react";
import { z } from "zod";

const UserSchema = z.object({
  id: z.number(),
  name: z.string().max(200),
});

const UsersSchema = z.array(UserSchema);

type Users = z.infer<typeof UsersSchema>;

export const useUsers = () => {
  const [users, setUsers] = useState<Users>([]);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    fetch("users.json")
      .then((response) => response.json())
      .then((json) => {
        const result = UsersSchema.safeParse(json);

        if (result.success) {
          setUsers(result.data);
        } else {
          setUsers(json);
          console.error(result.error);
          reportError(result.error);
          setError(result.error.message);
        }
      });
  }, []);

  return { users, error };
};
