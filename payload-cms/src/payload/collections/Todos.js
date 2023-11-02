// const payload = require('payload')

import payload from 'payload';
// import findByID from 'payload/dist/collections/operations/findByID';

/** @type {import('payload/types').CollectionConfig} */
const Todos = {
  slug: 'todos',
  labels: {
    singular: 'Todos',
    plural: 'Todos',
  },
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
    update: () => true,
    delete: () => true,
    create: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'completed',
      type: 'checkbox',
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'dueDate',
      type: 'date',
    },
    {
      name: 'priority',
      type: 'select',
      options: [
        { label: 'Low', value: 'low' },
        { label: 'Medium', value: 'medium' },
        { label: 'High', value: 'high' },
      ],
    },
    {
      name: 'categories',
      type: 'relationship',
      relationTo: 'categories',
    },
  ],


  hooks: {
    afterChange: [
      async (args) => {
        console.log('afterChange - operation:', args.operation);
        if (args.operation === 'create' || args.operation === 'update' || args.operation === 'delete') {
          await payload.create({
            collection: 'logs',
            data: {
              collection: 'todos',
              action: args.operation,
              timestamp: new Date(),
            },
          });
        }
      },
    ],
    afterOperation: [
      async (args) => {
        console.log('afterOperation - operation:', args.operation);
        if (args.operation === 'findByID') {
          // Create click activity
          await payload.create({
            collection: "logs",
            data: {
              collection: 'todos',
              action: args.operation,
              timestamp: new Date(),
            },
          });
        } else if (args.operation === 'deleteByID') {
          console.log('Delete operation detected - proceeding to log it.'); 
          
          await payload.create({
            collection: 'logs',
            data: {
              collection: 'todos',
              action: 'delete',
              timestamp: new Date(),
            },
          });
        }
      },
    ],
  }

};


// const useLog = () => {
//   const { createLog } = usePayload();

//   return () => {
//     // Contoh log perubahan data
//     createLog({
//       attribute: 'title',
//       collection: 'todos',
//       action: 'update',
//       timestamp: new Date(),
//     });
//   };
// };

export default Todos;


