import { PutObjectCommandOutput, S3 } from "@aws-sdk/client-s3";

export async function uploadToS3(
  file: File
): Promise<{ file_key: string; file_name: string }> {
  return new Promise((resolve, reject) => {
    try {
      const s3 = new S3({
        region: "us-west-2",
        credentials: {
          accessKeyId: process.env.NEXT_PUBLIC_S3_ACCESS_KEY_ID!,
          secretAccessKey: process.env.NEXT_PUBLIC_S3_SECRET_ACCESS_KEY!,
        },
      });

      const file_key =
        "uploads/" + Date.now().toString() + file.name.replace(" ", "-");

      const params = {
        Bucket: process.env.NEXT_PUBLIC_S3_BUCKET_NAME!,
        Key: file_key,
        Body: file,
      };

      console.log("Starting S3 upload with params:", params);  // <-- Log upload details

      s3.putObject(
        params,
        (err: any, data: PutObjectCommandOutput | undefined) => {
          if (err) {
            console.error("Error during S3 upload:", err);  // <-- Log any S3 error
            reject(err);
          } else {
            console.log("S3 upload successful. Data:", data);  // <-- Log successful upload data
            resolve({
              file_key,
              file_name: file.name,
            });
          }
        }
      );
    } catch (error) {
      console.error("Error in uploadToS3 function:", error);  // <-- Log any unexpected error
      reject(error);
    }
  });
}

export function getS3Url(file_key: string) {
  const url = `https://${process.env.NEXT_PUBLIC_S3_BUCKET_NAME}.s3.us-west-2.amazonaws.com/${file_key}`;
  return url;
}
