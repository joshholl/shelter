const mongoose = require('mongoose');
const Schemma = mongoose.Schema;

const providerSchema = new Schema({
    name: { type: String, required: true },
    url: { type: String, required: true },
    checksum_type: { type: String, required: true },
    checksum: { type: String, required: true }
});

const versionSchema = new Schema({
    version: { type: String, required: true },
    providers: [providerSchema]
});

const boxSchema = new Schema({
    name: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    versions: [versionSchema]
});

export const Box = model('Box', boxSchema);