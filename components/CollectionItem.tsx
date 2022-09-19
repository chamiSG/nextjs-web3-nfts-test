import Link from 'next/link';
import {
  Flex,
  Box,
  Image,
  useColorModeValue,
} from '@chakra-ui/react';
import { ICollection } from 'types';
import { parseJsonObject } from 'helpers';

const CollectionItem = (props: { collection: ICollection }) => {
  const { collection } = props

  return (
    <Flex w="full" alignItems="center" justifyContent="center" cursor={'pointer'}>
      <Link href={`collections/${collection?.token_id}`}>
        <Box
          bg={useColorModeValue('white', 'gray.800')}
          maxW="sm"
          borderWidth="1px"
          rounded="lg"
          shadow="lg"
          position="relative">
          <Image
            src={parseJsonObject(collection?.metadata).image}
            alt={`Picture of ${parseJsonObject(collection?.metadata).name}`}
            roundedTop="lg"
            fallbackSrc='/images/default.png'
          />
          <Box p="3">
            <Flex mt="1" justifyContent="space-between" alignContent="center">
              <Box
                fontSize="md"
                fontWeight="semibold"
                as="h5"
                lineHeight="tight"
              >
                {parseJsonObject(collection?.metadata).name}
              </Box>
            </Flex>

            <Flex justifyContent="start" alignItems="center" mt={4} fontSize="sm" color={useColorModeValue('gray.800', 'white')}>
              <svg height="16" width="16" viewBox="420.1 80.7 1079.8 1758.6" xmlns="http://www.w3.org/2000/svg">
                <path d="m959.8 80.7-539.7 895.6 539.7-245.3z" fill="#8a92b2" />
                <path d="m959.8 731-539.7 245.3 539.7 319.1zm539.8 245.3-539.8-895.6v650.3z" fill="#62688f" />
                <path d="m959.8 1295.4 539.8-319.1-539.8-245.3z" fill="#454a75" />
                <path d="m420.1 1078.7 539.7 760.6v-441.7z" fill="#8a92b2" />
                <path d="m959.8 1397.6v441.7l540.1-760.6z" fill="#62688f" />
              </svg>
              {collection?.amount}
            </Flex>
          </Box>
        </Box>
      </Link>
    </Flex>
  );
};

export default CollectionItem;
