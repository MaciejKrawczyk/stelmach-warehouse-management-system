import { PrismaClient } from "@prisma/client"
const db = new PrismaClient()

async function main() {

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