const defaultParams = { text: "Hello World", fontFamily: "Bebas Neue" };

const template = async ({ canvas, timeline, params, size, fabric, utils }) => {
  canvas.set({ backgroundColor: "black" });

  await utils.loadGoogleFont(params.fontFamily);

  const bgImage = await utils.fabric.loadImage({
    url: "https://fastly.picsum.photos/id/418/1920/1920.jpg?blur=8&hmac=nVSULgXXOBXkUNzKZeDVRECO3mqGCAUt6leL-LzNqbw",
    fabricOptions: {
      originX: "center",
      originY: "center",
    },
  });

  utils.fabric.scaleToCoverCanvas(bgImage, canvas);
  canvas.add(bgImage);
  canvas.centerObject(bgImage);

  const text = new fabric.FabricText(params.text, {
    fontSize: 100,
    fontFamily: params.fontFamily,
    fill: "white",
    originX: "center",
    originY: "center",
  });

  canvas.add(text);
  canvas.centerObject(text);

  timeline.from(text, {
    opacity: 0,
    angle: 200,
    duration: 2,
    ease: "elastic",
  });

  timeline.to(text, {
    scaleX: 2,
    scaleY: 2,
    opacity: 0,
    duration: 0.8,
    delay: 2,
    ease: "expo.out",
  });
};

export { template, defaultParams };
