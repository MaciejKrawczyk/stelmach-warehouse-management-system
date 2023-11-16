import {db} from "@/src/backend/model/db";

export function getItems() {
  return db.item.findMany({
    include: {
      attributeValue: {
        include: {
          typeAttribute: true
        }
      },
      company: true,
      itemType: true,
      status: true,
      shelf: true,
      orderCategory: true,
      parcel: true
    },
    where: {
      isDeleted: false
    }
  });
}


export function addItem(item) {
  // return db.company.create({
  //   data: {
  //     name: company.name,
  //     notes: company.notes,
  //   }
  // });
}