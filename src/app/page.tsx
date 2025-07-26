"use client";

import React from "react";
import {
  Heading,
  Text,
  Flex,
  Button,
  Grid,
  Icon,
  InlineCode,
  Background,
  LetterFx,
  Logo as OnceUILogo,
  SmartImage,
} from "@/once-ui/components";
import Link from "next/link";

export default function Home() {
  const links = [
    {
      href: "https://id.linkedin.com/in/andreas-mustofa-9b594b1a0",
      title: "Linkedin",
      description: "The stubborn person behind.",
    },
    {
      href: "https://instagram.com/andreas.mustofa",
      title: "Instagram",
      description: "The person who charm this.",
    },
    {
      href: "https://instagram.com/nurrohmilestari",
      title: "Sponsor",
      description: "The big behind.",
    },
  ];

  return (
    <Flex
      fillWidth
      paddingTop="l"
      paddingX="l"
      direction="column"
      alignItems="center"
      flex={1}
    >
      <Background dots={false} />
      <Flex
        position="relative"
        as="section"
        overflow="hidden"
        fillWidth
        minHeight="0"
        maxWidth={68}
        direction="column"
        alignItems="center"
        flex={1}
      >
        <Flex
          as="main"
          direction="column"
          justifyContent="center"
          fillWidth
          fillHeight
          padding="l"
          gap="l"
        >
          <Flex mobileDirection="column" fillWidth gap="24">
            <Flex position="relative" flex={2} paddingTop="56" paddingX="xl">
              <img
                src="/images/logo.png"
                alt="Logo"
                width="200"
                height="62"
                className="blinking-logo"
              />
            </Flex>
            <Flex
              position="relative"
              flex={4}
              gap="24"
              marginBottom="104"
              direction="column"
            >
              <InlineCode
                className="shadow-m"
                style={{
                  width: "fit-content",
                  padding: "var(--static-space-8) var(--static-space-16)",
                  backdropFilter: "blur(var(--static-space-1))",
                }}
              >
                Born to serve website and app{" "}
                <span className="brand-on-background-medium">for you</span>
              </InlineCode>
              <Heading wrap="balance" variant="display-strong-s">
                <span className="font-code">
                  <LetterFx trigger="instant">
                    JASA PEMBUATAN WEBSITE & APLIKASI UNTUK SEGALA JENIS USAHA
                  </LetterFx>
                </span>
              </Heading>
              <Button
                href="https://wa.me/6285159511491?text=Halo%20saya%20ingin%20bertanya%20tentang%20layanan%20Anda"
                suffixIcon="chevronRight"
                variant="primary"
              >
                Hubungi Kami
              </Button>
            </Flex>
          </Flex>
          <Grid
            radius="l"
            border="neutral-medium"
            borderStyle="solid-1"
            columns="repeat(3, 1fr)"
            tabletColumns="1col"
            mobileColumns="1col"
            fillWidth
          >
            {links.map((link) => (
              <Link
                target="_blank"
                style={{ padding: "var(--responsive-space-l)" }}
                key={link.href}
                href={link.href}
              >
                <Flex fillWidth paddingY="8" gap="8" direction="column">
                  <Flex fillWidth gap="12" alignItems="center">
                    <Text variant="body-strong-m" onBackground="neutral-strong">
                      {link.title}
                    </Text>
                    <Icon size="s" name="arrowUpRight" />
                  </Flex>
                  <Text variant="body-default-s" onBackground="neutral-weak">
                    {link.description}
                  </Text>
                </Flex>
              </Link>
            ))}
          </Grid>
        </Flex>
      </Flex>
      <Flex
        as="footer"
        position="relative"
        fillWidth
        paddingX="l"
        paddingY="m"
        justifyContent="space-between"
        direction="column"
        alignItems="center"
        gap="m"
      >
        <Flex gap="12">
          <Button
            href="https://github.com/andreasmustofa"
            prefixIcon="github"
            size="m"
            variant="tertiary"
          >
            GitHub
          </Button>
          <Button
            href="https://discord.gg/sBGnhF3NwN"
            prefixIcon="discord"
            size="m"
            variant="tertiary"
          >
            Discord
          </Button>
          <Button
            href="https://wa.me/6285159511491?text=Halo%20saya%20ingin%20bertanya%20tentang%20layanan%20Anda"
            prefixIcon="whatsapp"
            size="m"
            variant="tertiary"
          >
            Whatsapp
          </Button>
          <Button
            href="https://nuxt-edge-murex.vercel.app/"
            suffixIcon="checkCircle"
            variant="secondary"
          >
            IP Anda
          </Button>
        </Flex>
        {/* <Text variant="body-default-s" onBackground="neutral-weak">
          Jl. Sadewa No. 19A, Maguwoharjo, Depok, Sleman, DIY 55282
        </Text> */}
        <img src="/images/logo.png" alt="Logo" width="85" height="26" />
        <Text variant="body-default-s" onBackground="neutral-weak">
          © 2024 Andreas Mustofa,{" "}
          <Link href="https://andreas.framer.website">MIT License</Link>
        </Text>
      </Flex>
    </Flex>
  );
}
