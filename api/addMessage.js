const func = require("firebase-functions");
const admin = require("firebase-admin");
const {logger} = func;

exports.addMessage = func.https.onCall(async (data, context)=>{
  try {
    logger.log("recive ", data);

    //see if all require data is there
    if (!data.text || !data.userId) {
      logger.log("miss required info");
      throw new func.https.HttpError("invalid-argument", "miss required");
    }
    const {text, userId}=data;
    //construct package to upload
    const messageData={
      text, userId,
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
    };
    //upload package
    const messageRef=await admin
        .firestore()
        .collection("chat")
        .doc(userId)
        .collection("messages")
        .add(messageData);
    logger.log("message add success");
    return {status: "success", msgID: messageRef.id};
  } catch (error) {
    logger.error("error ", error);
    throw new func.https.HttpError("error occured");
  }
});
