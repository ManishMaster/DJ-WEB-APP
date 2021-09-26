function preload() {
          pirate_song = loadSound("01pirates-of-caribean-theme-ringtone-30430.mp3");
          alan_walker_song = loadSound("Alan-Walker-Fade.mp3");
}

function setup() {
          canvas = createCanvas(600, 500);
          canvas.center();

          video = createCapture(VIDEO);
          video.hide();

          poseNet = ml5.poseNet(video, modelLoaded);
          poseNet.on('pose', gotPoses)
}

leftWristX = 0;
leftWristY = 0;

rightWristX = 0;
rightWristY = 0;

function modelLoaded() {
          console.log("Model just got Loaded");
}

function gotPoses() {
          if (results.length > 0) {
                    leftWristX = results[0].pose.leftWrist.x;
                    leftWristY = results[0].pose.leftWrist.y;
                    rightWristX = results[0].pose.rightWrist.x;
                    rightWristY = results[0].pose.rightWrist.y;

                    console.log("The coordinates for left wrist is " + "x: " + leftWristX + " y: " + leftWristY)
                    console.log("The coordinates for right wrist is " + "x: " + rightWristX + " y: " + rightWristY)
          }
}

function draw() {
          image(video, 0, 0, 600, 500);
}