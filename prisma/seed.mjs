import { PrismaClient } from "@prisma/client"
const db = new PrismaClient()

async function main() {

    const defaultPlaces = await db.place.createMany({
        data: [
            {
                // "id": 1,
                workname: "magazine",
                name: "magazyn"
            },
            {
                // "id": 2,
                workname: "sharpening",
                name: "wysłane"
            },
            {
                // "id": 3,
                workname: "sharpeningWaitingRoom",
                name: "poczekalnia do wysyłki"
            },
            {
                // "id": 4,
                workname: "trash",
                name: "złom"
            },
            {
                // "id": 5,
                workname: "szyba",
                name: "szyba"
            },
            {
                // "id": 6,
                workname: "position4",
                name: "stanowisko 4"
            },
            {
                // "id": 7,
                workname: "position7",
                name: "stanowisko 7"
            },
            {
                // "id": 8,
                workname: "position13",
                name: "stanowisko 13"
            },
            {
                // "id": 9,
                workname: "position6",
                name: "stanowisko 6"
            },
            {
                // "id": 10,
                workname: "positionPlatTit",
                name: "stanowisko plat/tyt"
            },
            {
                // "id": 11,
                workname: "gofuture",
                name: "gofuture"
            },
            {
                // "id": 12,
                workname: "goringPipe",
                name: "goring rura"
            },
            {
                // "id": 13,
                workname: "rnd",
                name: "rnd"
            },
            {
                // "id": 14,
                workname: "goringRnd",
                name: "goring rnd"
            },
            {
                // "id": 15,
                workname: "5@workNew",
                name: "5@work nowa"
            },
            {
                // "id": 16,
                workname: "5@workOld",
                name: "5@work stara"
            },
            {
                // "id": 17,
                workname: "chiron",
                name: "chiron"
            },
            {
                // "id": 18,
                workname: "ordered",
                name: "zamówione"
            }
        ]
    })

    const defaultCategory = await db.shelfCategory.create({
        data: {
            name: 'default',
            color: '#eeeeee',
            notes: 'default'
        }
    })

    const object = await db.shelf.create({
        data: {
            id: -1,
            name: String(0),
            size: 'big',
            shelfCategoryId: 1
        }
    })

    for (let i=0;i<72;i++) {

        const object = await db.shelf.create({
            data: {
                name: String(i + 1),
                size: 'big',
                shelfCategoryId: 1
            }
        })

    }

    for (let i=0;i<160;i++) {

        const object = await db.shelf.create({
            data: {
                name: String(i + 1),
                size: 'small',
                shelfCategoryId: 1
            }
        })

    }

}

main()
  .then(async () => {
    console.log('seed has been executed successfully.')
    await db.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await db.$disconnect()
    process.exit(1)
  })