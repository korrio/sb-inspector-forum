// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
    const data = {
        "success": true,
        "data": [{
            id: 1,
            slug: "this-is-slug",
            title: "my title about crime and tragedy",
            user: {
                user_name: "korrio"
            },
            tags: [{
              id: 1,
              slug: "my-tag-slug"
            }]
        }],
        "meta": { "total": 1 }
    };

    res.status(200).json(data)
}