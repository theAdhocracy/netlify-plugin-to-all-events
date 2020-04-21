module.exports = {
  onInit: () => {
    console.log("onInit: I run before anything else 🐣");
  },
  onPreBuild: () => {
    console.log("onPreBuild: I run_before_ build commands are executed 🌤");
  },
  onBuild: ({ inputs }) => {
    console.log("onBuild: I run while build commands are being executed ⚙️");
    console.log(`I also know your keyword is: ${inputs.keyword}.`);
    console.log(`Oh, and your database URL is: ${inputs.databaseUrl}.`);
  },
  onPostBuild: ({ constants }) => {
    console.log("onPostBuild: I run _after_ build commands are executed ✅");
    console.log("Here are some other things I know thanks to constants:");
    console.log(constants);
  },
  onSuccess: ({ constants }) => {
    console.log("onSuccess: I run on build success 🎉");
    try {
      errorTime();
    } catch (error) {
      utils.build.failBuild("Oh no! Error time!", { error });
    }
  },
  onError: () => {
    console.log("onError: I run on build error 🚒");
  },
  onEnd: () => {
    console.log(
      "onEnd: I run on build error or success when the build process ends 🎬"
    );
  },
};
