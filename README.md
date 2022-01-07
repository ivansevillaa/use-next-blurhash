# useNextBlurhash

useNextBlurhash is a custom hook that from a [blurhash](https://blurha.sh/) string will give you a [blurDataUrl](https://nextjs.org/docs/api-reference/next/image#blurdataurl) to add to your dynamics image in Nextjs apps, getting so a better user experience.

To get more context I recommend you [read this.](https://nextjs.org/blog/next-11#image-placeholders) 

## Requeriments

You need at least Next.js 11.

## Installation

```bash
npm install use-next-blurhash
```

or

```
yarn add use-next-blurhash
```

## Usage
useNextBlurhash accepts four values but only the hash is required
```
useNextBlurhash(hash, width, height, puch);
```

* hash: the encoded blurhash (you can obtain one [here](https://blurha.sh/))
* width: a number to set the width of the blurred image (160 by default)
* height: a number to set the height of the blurred image (120 by default)
* punch: a number that adjusts the contrast of the output image (optional)

Is not necessary that the width and the height that we passed are the same that the original image, I personally recommend you to use the default values because at the end the blurred image will cover all the original image space and looks good.

### Example

```javascript
import Image from "next/image";
import useNextBlurhash from "use-next-blurhash";

export default function Something(props) {
   const [blurDataUrl] = useNextBlurhash("LEHV6nWB2yk8pyo0adR*.7kCMdnj");
   
   return (
      <Image
         src="https://nextjs.org/static/images/learn.png"
         placeholder="blur"
         blurDataURL={blurDataUrl}
         alt="Picture of the author"
      />
   );
}
```

## Config to deploy with Vercel
If you deploy with Vercel, you may have an error something like this: `version `ZLIB_1.2.9' not found`
You can fix it following [this steps](https://github.com/ivansevillaa/use-next-blurhash/issues/4)

Also, you can check the original issue and solution to understand what is going on
[Ref to the original issue](https://github.com/Automattic/node-canvas/issues/1779)
[Ref to the original solution](https://github.com/Automattic/node-canvas/issues/1779#issuecomment-895885846)

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)
