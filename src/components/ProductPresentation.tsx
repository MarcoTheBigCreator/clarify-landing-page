'use client';

import { motion } from 'framer-motion';

export const ProductPresentation = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      id="demo"
      className="space-y-16"
    >
      <h2 className="text-4xl font-semibold text-center">
        See the App in Action
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 max-w-md"
        >
          <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
            <div className="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
            <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
            <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
            <div className="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
            <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
              {/* <video
                className="h-full w-full flex flex-col items-center justify-center p-4"
                src="https://res.cloudinary.com/dmlpgks2h/video/upload/v1725059424/clarify/fv8ivudtxxg8ufd0r9sb.mp4"
              /> */}
              <video
                width="1080"
                height="1920"
                preload="auto"
                loop
                className="h-full w-full flex flex-col items-center justify-center p-4"
              >
                <source
                  src="https://res.cloudinary.com/dmlpgks2h/video/upload/v1725059424/clarify/fv8ivudtxxg8ufd0r9sb.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 space-y-4"
        >
          <h3 className="text-2xl font-semibold">How to Use BlindAssist</h3>
          <ol className="list-decimal list-inside space-y-2 text-blue-200">
            <li>Open the BlindAssist app on your smartphone</li>
            <li>Tap anywhere on the screen to activate voice commands</li>
            <li>
              {
                'Speak a command, such as "Describe my surroundings" or "Read text"'
              }
            </li>
            <li>
              {"Listen to the app's response and follow the instructions"}
            </li>
            <li>
              {"Use simple gestures to navigate through the app's features"}
            </li>
          </ol>
          <p className="text-blue-200 mt-4">
            {
              "BlindAssist uses advanced AI and your phone's camera to provide real-time assistance, making everyday tasks more accessible for visually impaired users."
            }
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};
