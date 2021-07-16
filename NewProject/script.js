


const {createCanvas, Image } = require('canvas');


export function highlightText(imageBase64String, value) {
    
    var img = new Image;
    img.src = imageBase64String;
    var canvas = createCanvas(img.width, img.height);
    var context = canvas.getContext('2d');
    context.drawImage(img, 0, 0, img.width, img.height);
   
    // Now draw boxes around all the texts
    context.strokeStyle = 'rgba(0, 0, 255, 0.8)';
    context.lineWidth = '3';
    context.fillStyle = 'rgba(0, 0, 255, 0.8)';
   
      
      context.beginPath();
      let origX = 0;
      let origY = 0;
      value.textAnnotations[0].boundingPoly.vertices.forEach((bounds, j) => {
      if (j === 0) {
          origX = bounds.x;
          origY = bounds.y;
          }
          context.lineTo(bounds.x, bounds.y); 
      });
      context.lineTo(origX, origY);
      context.stroke();
      return canvas;
}   
   
      

//       // Write the result to a file
//       console.log('Writing to file ' + outputFile);
//       var writeStream = fs.createWriteStream(outputFile);
//       var pngStream = canvas.pngStream();
  
//       pngStream.on('data', chunk => {
//         writeStream.write(chunk);
//       });
//       pngStream.on('error', console.log);
//       pngStream.on('end', callback);
//     });
//   }





 // Open the original image into a canvas
 
   // imageResult.setAttribute("src", imageBase64String);


 

 // Write the result to a file
//       console.log('Writing to file ' + outputFile);
//       var writeStream = fs.createWriteStream(outputFile);
//       var pngStream = canvas.pngStream();

//       pngStream.on('data', chunk => {
//         writeStream.write(chunk);
//       });
//       pngStream.on('error', console.log);
//       pngStream.on('end', callback);
//     });
//   }


