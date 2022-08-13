<div align="center">
  <h3>
    <a href="https://resonate.is">
      Website
    </a>
    <span> | </span>
    <a href="https://www.twitter.com/resonatecoop/">
      Twitter
    </a>
    <span> | </span>
    <a href="https://github.com/resonatecoop/stream2own/blob/master/CONTRIBUTING.md">
      Contributing
    </a>
    <span> | </span>
    <a href="https://community.resonate.is/t/dev-volunteers-needed-to-build-the-resonate-ecosystem/2262">
      Developer Guide
    </a>
    <span> | </span>
    <a href="https://docs.resonate.coop">
      Resonate Docs
    </a>
  </h3>
</div>
<br />

> 🛠 **Status: Maintenance Mode**
>
> This project is currently in [maintenance mode](https://en.wikipedia.org/wiki/Maintenance_mode) - users should feel free to continue to use this app and expect bug fixes, but not expect many additional features, as this is considered relatively feature-complete (given the limitations of [`react-native-webview`](https://github.com/react-native-webview/react-native-webview).
> 
> Future development is occurring here: [`mobile`](https://github.com/resonatecoop/mobile) as a React Native TypeScript implementation without `react-native-webview`. Note that this repository is still active on the [Google Play Store](https://play.google.com/store/apps/details?id=com.resonate.streamapp) and the [Apple Store](https://testflight.apple.com/join/WJZ5EHqf), so please submit any issues for problems encountered [here](https://github.com/peterklingelhofer/stream-app/issues), as we are continuing to offer support and fix bugs while [`mobile`](https://github.com/resonatecoop/mobile) development is still underway.

## 🎵 Resonate Stream App

A mobile app for playing music on [Resonate](https://stream.resonate.coop/), an open source music streaming co-op.

The [🤖 Android App](https://play.google.com/store/apps/details?id=com.resonate.streamapp) is available for open testing.

The [🍎 Apple/iOS App](https://testflight.apple.com/join/WJZ5EHqf) is available for external testing.

The [Expo Project Page](https://expo.dev/@peterklingelhofer/stream-app?serviceType=classic&distribution=expo-go) permits testing with the [Expo Go](https://expo.dev/client) client.

A [demonstration video](https://www.dropbox.com/s/yfpaw0v7lu2x9af/Simulator%20Screen%20Recording%20-%20iPhone%208%20-%202022-02-17%20at%2018.58.26.mp4?dl=0) is available.

See the [stream](https://github.com/resonatecoop/stream) repository for more details.

View the [GitHub Project Board](https://github.com/peterklingelhofer/stream-app/projects/1) to track work progress and management for this repository.

## 🎶 Description

Resonate is an open-source music streaming service run by a cooperative of artists and software developers.

If you want to know what we're building or want to get more involved, head over to the Platform category on our [forum](https://community.resonate.is/c/platform/l/latest?board=default) or read the [Developer Guide](https://community.resonate.is/docs?topic=2262) in our [Resonate Handbook](https://community.resonate.is/docs).

View the [project board](https://github.com/peterklingelhofer/stream-app/projects/1) where work is tracked for this repository. If you're looking for a good first task, feel encouraged to take on an un-assigned [`help wanted` or `good first task` issues](https://github.com/resonatecoop/stream/issues).

Are you building something using the Resonate [API](#api) and would like to request a change? Resonate welcomes #proposals in the [Co-Operation section of the forum](https://community.resonate.is/c/66).


## 🗂 Tech Stack

- Babel
- Expo
- React
- React Native
- TypeScript


## 🔧 Installation & Start

Clone this repository, install dependencies, and start expo.

```sh
git clone https://github.com/peterklingelhofer/stream-app.git
cd stream-app
yarn global add expo-cli
yarn
expo start
```

## 📦 Build
Install the latest Expo Application Services (EAS) package.

```sh
npm install -g eas-cli
```

Then create a build for whichever platform you desire:
```sh
eas build -p android
```
```sh
eas build -p ios
```

For more in-depth instructions and additional options, review the [official Expo build documentation](https://docs.expo.dev/build/introduction/).

## 🧪 Testing
For testing, per [#3 under Other issues to consider](https://github.com/resonatecoop/stream/issues/171), we should probably also be testing (at-least locally) with the development branch of the [stream repository](https://github.com/resonatecoop/stream) considering the in-progress Wordpress transition -- change the WebView `source` prop in `App.tsx` to `source={{ uri: 'https://stream.resonate.ninja/discover' }}`. As far as we know, the only difference for the streaming player should be signup/login flow and account settings.


## 📚 Contributing

<a href="https://github.com/resonatecoop/stream2own/blob/master/CONTRIBUTING.md">Contributing</a> to others’ projects is an avenue to learn new software development skills and experience new technologies. The pull request is how your personal contributions will be added to the project. The following is an overview of the Git project management workflow:

Search project for contribution instructions and follow them if present.
Fork project repo from your personal Github account.
Copy the fork and clone repo onto your local machine.
Add the original repository (the you forked) as a remote called upstream.
If you created your fork a while ago be sure to pull upstream changes into your local repository.
Create a new branch to work on! Branch from develop if it exists, else from master.
Implement/fix your feature.
Follow the code style of the project, including indentation.
If the project has included tests use them.
Add additional tests or convert existing tests as necessary.
Add or convert project documentation as needed.
Push your working branch to your forked repo on Github.
Make a pull request from your forked repo to the origin master or development branch if present.
Once your pull request is merged, pull down upstream master to your local repo and delete any additional branch(es) you may have created.
Commit messages should be written in present tense describing what the committed code does and not what you changed in the code.


## 📖 References

- [Expo](https://expo.dev/)
- [React Native](https://reactnative.dev/)
- [TypeScript](https://typescriptlang.org/')


## 📑 License

`stream-app` is licensed under the
[GNU General Public License v3.0](https://github.com/peterklingelhofer/stream-app/blob/master/LICENSE)

Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights.


## 📸 Screenshots
![Screenshot_20220328-234520_Resonate](https://user-images.githubusercontent.com/60944077/167742491-00e0ac80-3fc7-4b6d-a564-d4bd03c146da.jpg)
![Screenshot_20220328-234804_Resonate](https://user-images.githubusercontent.com/60944077/167742511-087af2d5-af71-45a3-96ef-e1d5d7e2034a.png)
![Screenshot_20220328-234942_Resonate](https://user-images.githubusercontent.com/60944077/167742534-13c8d18b-7923-439d-8b61-abd7ea53896e.jpg)
