import { useState } from 'react';

import { Container } from '@/components/layout/customer';

import CommunityImage1 from '@/assets/customer/vendors/community1.svg';
import CommunityImage2 from '@/assets/customer/vendors/community2.svg';
import PatternImage from '@/assets/customer/backs/pattern.png';
import VtypeImage1 from '@/assets/customer/backs/vendortype1.png';
import VtypeImage2 from '@/assets/customer/backs/vendortype2.png';
import VtypeImage3 from '@/assets/customer/backs/vendortype3.png';
import styles from './AboutCommunity.module.scss';

interface ICommunity {
  avatar: string;
  name: string;
  description: string;
}

interface IVendorType {
  title: string;
  content: string;
  image: string;
}

const initialCommunities: ICommunity[] = [
  {
    avatar: CommunityImage1,
    name: 'The Fresher Choice Community',
    description:
      "This is the over all community of likeminded individuals using the power of eCommerce to make a difference in their lives through entrepreneurship. Whether you shop solopreneurs or from Vendor Communities, you're shopping from this community.",
  },
  {
    avatar: CommunityImage2,
    name: 'The Vendor Community',
    description:
      'Our Vendor Community project, empowers local people to organize vendors and to help build real relationship with each other and customers like you.',
  },
];

const initialVendorTypes: IVendorType[] = [
  {
    title: 'Makers & More',
    content: 'Offering items from vendors that can be shipped directly to you',
    image: VtypeImage1,
  },
  {
    title: 'Vendors Near You',
    content:
      'Offering Items from local vendors near you. Items can be scheduled for pickup or local delivery',
    image: VtypeImage2,
  },
  {
    title: 'Subscriptions',
    content: 'Offering subscriptions from local vendors near you',
    image: VtypeImage3,
  },
];

export function AboutCommunity() {
  const [communities, setCommunities] =
    useState<ICommunity[]>(initialCommunities);

  return (
    <div className={styles.root}>
      <Container className={styles.container}>
        <div className={styles.wrapper}>
          <h1>What is a vendor community?</h1>
          <p>
            Fresher Choice's new C-commerce initiative empowers local people to
            organize small makers and growers in their communities to help them
            connect with customers looking for what they’re selling.
          </p>
          <div className={styles.ccommerce}>
            <h2>C-Commerce (Community Commerce) </h2>
            <p>
              A group of people sharing a common interest in supporting the
              efforts of growing sales and awareness of each other’s products or
              services in-person and online using a single commerce platform.
            </p>
          </div>
        </div>
      </Container>
      <div className={styles.vback}>
        <img src={PatternImage} className={styles.vPatternImage} />
        <Container className={styles.vcontainer}>
          <h4>{communities.length} Types of community you can shop</h4>
          <div className={styles.communities}>
            {communities.map(community => (
              <div className={styles.community}>
                <img src={community.avatar} className={styles.avatar} />
                <div className={styles.content}>
                  <p className={styles.header}>{community.name}</p>
                  <p>{community.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.vtypes}>
            <div className={styles.content}>
              <p className={styles.header}>Types of vendors you'll find.</p>
              <p>
                Every vendor operates their own store whether they are a part of
                a Vendor Community or going at it solo. What each vendor has in
                common is they offer one or all three vendor types.
              </p>
            </div>
            <div className={styles.vendors}>
              {initialVendorTypes.map((vtype: IVendorType, index: number) => (
                <div key={`vendor-type-${index}`} className={styles.vendor}>
                  <h6>{vtype.title}</h6>
                  <p>{vtype.content}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
        <div className={styles.vtypeImages}>
          {initialVendorTypes.map((vtype: IVendorType, index: number) => (
            <img src={vtype.image} />
          ))}
        </div>
      </div>
    </div>
  );
}
