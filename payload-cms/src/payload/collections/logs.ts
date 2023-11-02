import { CollectionConfig } from 'payload/types';

const Logs: CollectionConfig = {
    slug: 'logs',
    
    fields: [
        {
            name: 'action',
            label: 'Action',
            type: 'text',
            required: true,
        },
        {
            name: 'timestamp',
            label: 'Timestamp',
            type: 'date',
            required: true,
        },
    ],
    access: {
        read: () => true, 
        create: () => false, 
        update: () => false, 
        delete: () => true, 
    },
};

export default Logs;
