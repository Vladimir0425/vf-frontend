import React, { ChangeEvent, useState } from 'react';

import { Card, ImageUpload, Input, Select, TextField } from '@/components';

import { ImageType } from '@/interfaces';

import styles from './NewPost.module.scss';

export interface INewPost {
  title: string;
  topic: string;
  body: string;
  thumbImg: ImageType;
  largeImg: ImageType;
}

const initialPost: INewPost = {
  title: '',
  topic: '',
  body: '',
  thumbImg: null,
  largeImg: null,
};

export function NewPost() {
  const [post, setPost] = useState<INewPost>(initialPost);

  const updatePost = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: string,
  ) => {
    setPost({ ...post, [field]: e.target.value });
  };

  return (
    <Card title="Support Center" className={styles.root}>
      <div className={styles.container}>
        <div className={styles.form}>
          <div className={styles.control}>
            <p>Title</p>
            <Input
              value={post.title}
              updateValue={(e: ChangeEvent<HTMLInputElement>) =>
                updatePost(e, 'title')
              }
              placeholder="Title"
            />
          </div>
          <div className={styles.control}>
            <p>Topic</p>
            <Input
              value={post.topic}
              updateValue={(e: ChangeEvent<HTMLInputElement>) =>
                updatePost(e, 'topic')
              }
              placeholder="Topic"
            />
          </div>
        </div>
        <div className={styles.images}>
          <h2>Thumbnail Image</h2>
          <ImageUpload
            exWidth={323}
            exHeight={191}
            updateBaseImage={() => {}}
          />
          <h2>Thumbnail Image</h2>
          <ImageUpload
            exWidth={674}
            exHeight={410}
            updateBaseImage={() => {}}
          />
        </div>
      </div>
      <div className={styles.bodyControl}>
        <p>Body</p>
        <TextField
          rows={15}
          placeholder="Body"
          value={post.body}
          updateValue={(e: ChangeEvent<HTMLTextAreaElement>) =>
            updatePost(e, 'body')
          }
          className={styles.bodyInput}
        />
      </div>
      <div className={styles.buttonBar}>
        <button className={styles.cancelButton}>Cancel</button>
        <button className={styles.addButton}>Add</button>
      </div>
    </Card>
  );
}
