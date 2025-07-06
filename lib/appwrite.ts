export const appwriteConfig = {
  endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT,
  platform: "com.take.away",
  projectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID,
  databaseId: process.env.EXPO_APPWRITE_DATABASE_ID,
  userCollectionId: process.env.EXPO_APPWRITE_DATABASE_USER_COLLECTION_ID,
};
