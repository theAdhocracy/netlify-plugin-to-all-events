module.exports = {
  onInit: () => {
    console.log('onInit: I run before anything else 🐣');
  },
  onPreBuild: () => {
    console.log('onPreBuild: I run_before_ build commands are executed 🌤');
  },
  onBuild: ({ inputs }) => {
    console.log('onBuild: I run while build commands are being executed ⚙️');
    console.log(`I also know your keyword is: ${inputs.keyword}.`);
    console.log(`Oh, and your database URL is: ${inputs.databaseUrl}.`);
  },
  onPostBuild: ({ constants }) => {
    console.log('onPostBuild: I run _after_ build commands are executed ✅');
    console.log('Here are some other things I know thanks to constants:');
    console.log(constants);
  },
  onSuccess: ({ utils }) => {
    console.log('onSuccess: I run on build success 🎉');
    /*
    // Uncomment this block to see the onError code run.
    //  This is also a good way to handle errors 👇
    try {
      throw new Error('This is the error 🚨');
    } catch (error) {
      utils.build.failBuild('Error found, build will fail!', { error });
      // utils.build.failPlugin('This fails the plugin but not the build.');
      // utils.build.cancelBuild(`This will cancel the build ${error}.`);
    }
    */
  },
  onError: () => {
    console.log('onError: I run on build error 🚒');
  },
  onEnd: () => {
    console.log(
      'onEnd: I run on build error or success when the build process ends 🎬'
    );
  },
};
