const express = require('express');
const aws = require('./../aws');

const carrouselRouter = express.Router();
const carrouselData = require('./../data/carrousel.json');

const s3 = new aws.S3();
const BUCKET_NAME = process.env.BUCKET_NAME;

// Function to fetch images from S3 bucket
const fetchImages = async () => {
    const params = {
        Bucket: BUCKET_NAME,
    };

    // List objects in the specified S3 bucket
    const data = await s3.listObjectsV2(params).promise();
    const images = data.Contents.map(item => item.Key); // Get the keys (file names)

    // Format the URLs in the desired structure
    return images.map(image => ({
        url: `https://${BUCKET_NAME}.s3.amazonaws.com/${image}`
    }));
};

carrouselRouter.get('/', async (req, res) => {
    try {
        const formattedImages = await fetchImages();
        res.json(formattedImages);
    } catch (error) {
        console.error('Error fetching images from S3:', error);
        res.status(500).json({ error: 'Failed to fetch images' });
    }
});

module.exports = carrouselRouter;
