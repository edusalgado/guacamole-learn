db.createUser(
        {
            user: "guaca",
            pwd: "1234",
            roles: [
                {
                    role: "readWrite",
                    db: "user_registration"
                }
            ]
        }
);

conn = new Mongo();
db = conn.getDB("user_registration");


db.user.createIndex({ "user": 1 }, { unique: false });
db.user.insert({ "user": { "city": "Barcelona", "zip": "08025" }, "name": "Riudi", "phone": "1234" });
