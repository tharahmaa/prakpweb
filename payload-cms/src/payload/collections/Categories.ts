// const payload = require('payload')

import { CollectionConfig } from 'payload/types';
const Categories: CollectionConfig = {
  slug: 'categories',
  labels: {
    singular: 'Categories',
    plural: 'Categories',
  },
  access: {
    read: () => true,
    update: () => true,
    delete: () => true,
    create: () => true,
  },

  // hooks: {
  //   afterOperation: [
  //     async (args) => {
  //       if (args.operation == "findByID") {
  //         payload.create({
  //           collection: "logs",
  //           data: {
  //             categories: args.result.id,
  //             timestamp: new Date(),
  //           },
  //         });
  //       }
  //     },
  //   ],
  // },

  admin: {
    useAsTitle: 'activeButton',
  },
  fields: [
    {
      name: 'activeButton',
      label: 'Category',
      type: 'text',
      required: true,
    },
  ],
};

export default Categories;
