
exports.handler = async (event, context) => {
  const data = JSON.parse(event.body);
  console.log("Kaydedilen veri:", data);
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Veri başarıyla kaydedildi." }),
  };
};
