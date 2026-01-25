import { Image as ExpoImage } from "expo-image";
import React, { useState } from "react";
import { ImageStyle, StyleProp, View } from "react-native";
import { Colors } from "../../constants/theme";
import { SkeletonLoader } from "./SkeletonLoader";

interface LazyImageProps {
  source: { uri: string };
  style?: StyleProp<ImageStyle>;
  placeholder?: React.ReactNode;
  fallback?: React.ReactNode;
  foodName?: string;
  foodCategory?: string;
}

const getFallbackImage = (foodName?: string, foodCategory?: string): string => {
  if (!foodName && !foodCategory) {
    return "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/11/mercimek-corbasi-yemekcom.jpg";
  }

  const name = foodName?.toLowerCase() || "";
  const category = foodCategory?.toLowerCase() || "";

  // Çorbalar
  if (name.includes("mercimek") || category.includes("çorba")) {
    return "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/11/mercimek-corbasi-yemekcom.jpg";
  }
  if (name.includes("ezogelin")) {
    return "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/11/ezogelin-corbasi-yemekcom.jpg";
  }
  if (name.includes("yayla")) {
    return "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/11/yayla-corbasi-yemekcom.jpg";
  }
  if (name.includes("domates") && name.includes("çorba")) {
    return "https://cdn.yemek.com/mnresize/1250/833/uploads/2016/09/domates-corbasi-asama-10.jpg";
  }
  if (name.includes("tarhana")) {
    return "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/11/tarhana-corbasi-yemekcom.jpg";
  }
  if (name.includes("mantar")) {
    return "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/06/mantar-corbasi-asama-7.jpg";
  }
  if (
    name.includes("işkembe") ||
    name.includes("kelle") ||
    name.includes("paça")
  ) {
    return "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/04/kelle-paca-corbasi-asama-11.jpg";
  }

  // Et Yemekleri ve Kebap
  if (name.includes("adana")) {
    return "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/08/adana-kebap-yemekcom.jpg";
  }
  if (name.includes("urfa")) {
    return "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/08/urfa-kebabi-yemekcom.jpg";
  }
  if (name.includes("iskender")) {
    return "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/11/iskender-kebap-yemekcom.jpg";
  }
  if (name.includes("döner")) {
    return "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/04/doner-kebap-yemekcom.jpg";
  }
  if (name.includes("şiş") && name.includes("kebap")) {
    return "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/08/sis-kebap-yemekcom.jpg";
  }
  if (
    name.includes("kebap") ||
    category.includes("kebap") ||
    category.includes("izgara")
  ) {
    return "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/08/adana-kebap-yemekcom.jpg";
  }
  if (name.includes("köfte")) {
    return "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/11/izgara-kofte-yemekcom.jpg";
  }

  // Baklagiller
  if (name.includes("kuru fasulye")) {
    return "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/11/kuru-fasulye-yemekcom.jpg";
  }
  if (name.includes("barbunya")) {
    return "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/06/zeytinyagli-barbunya-pilaki-asama-11.jpg";
  }
  if (name.includes("nohut")) {
    return "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/03/nohut-yemegi-yemekcom.jpg";
  }
  if (name.includes("mercimek") && name.includes("köfte")) {
    return "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/03/mercimek-kofte-yemekcom.jpg";
  }
  if (name.includes("yeşil mercimek")) {
    return "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/03/yesil-mercimek-yemegi-asama-8.jpg";
  }
  if (category.includes("baklagil")) {
    return "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/11/kuru-fasulye-yemekcom.jpg";
  }

  // Sebze Yemekleri
  if (name.includes("patlıcan") || name.includes("musakka")) {
    return "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/11/patlican-musakka-yemekcom.jpg";
  }
  if (name.includes("karnıyarık")) {
    return "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/11/karniyarik-yemekcom.jpg";
  }
  if (name.includes("dolma") || name.includes("sarma")) {
    return "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/11/yaprak-sarma-yemekcom.jpg";
  }
  if (name.includes("imambayıldı")) {
    return "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/11/imambayildi-yemekcom.jpg";
  }
  if (name.includes("taze fasulye")) {
    return "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/11/taze-fasulye-yemekcom.jpg";
  }
  if (name.includes("bamya")) {
    return "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/11/bamya-yemekcom.jpg";
  }
  if (name.includes("ıspanak")) {
    return "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/11/ispanak-yemekcom.jpg";
  }
  if (name.includes("karnabahar")) {
    return "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/11/karnabahar-yemekcom.jpg";
  }
  if (name.includes("pırasa")) {
    return "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/11/pirasa-yemegi-yemekcom.jpg";
  }
  if (name.includes("sebze") || category.includes("sebze")) {
    return "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/11/taze-fasulye-yemekcom.jpg";
  }

  // Hamur İşleri
  if (name.includes("pide")) {
    return "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/04/peynirli-pide-yemekcom.jpg";
  }
  if (name.includes("lahmacun")) {
    return "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/04/lahmacun-yemekcom.jpg";
  }
  if (name.includes("börek")) {
    return "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/11/peynirli-borek-yemekcom.jpg";
  }
  if (name.includes("mantı")) {
    return "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/11/turk-manti-yemekcom.jpg";
  }
  if (name.includes("gözleme")) {
    return "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/01/gozleme-yemekcom.jpg";
  }
  if (name.includes("poğaça")) {
    return "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/01/peynirli-pogaca-yemekcom.jpg";
  }
  if (category.includes("hamur")) {
    return "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/04/peynirli-pide-yemekcom.jpg";
  }

  // Kahvaltı
  if (name.includes("menemen") || category.includes("kahvaltı")) {
    return "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/11/menemen-yemekcom.jpg";
  }
  if (name.includes("sucuklu yumurta")) {
    return "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/11/sucuklu-yumurta-yemekcom.jpg";
  }
  if (name.includes("simit")) {
    return "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/01/simit-yemekcom.jpg";
  }

  // Tatlılar
  if (name.includes("baklava") || category.includes("tatlı")) {
    return "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/11/baklava-yemekcom.jpg";
  }
  if (name.includes("künefe") || name.includes("kadayıf")) {
    return "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/11/kunefe-yemekcom.jpg";
  }
  if (name.includes("sütlaç")) {
    return "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/11/sutlac-yemekcom.jpg";
  }

  // Salatalar
  if (name.includes("çoban")) {
    return "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/06/coban-salatasi-yemekcom.jpg";
  }
  if (name.includes("mevsim")) {
    return "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/06/mevsim-salatasi-yemekcom.jpg";
  }
  if (name.includes("patates")) {
    return "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/07/patates-salatasi-yemekcom.jpg";
  }
  if (name.includes("kısır")) {
    return "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/06/kisir-yemekcom.jpg";
  }
  if (name.includes("salata") || category.includes("salata")) {
    return "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/06/coban-salatasi-yemekcom.jpg";
  }

  // Pilav ve Makarna
  if (name.includes("pilav")) {
    return "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/11/domatesli-pilav-yemekcom.jpg";
  }
  if (name.includes("makarna")) {
    return "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/07/besamel-makarna-yemekcom.jpg";
  }
  if (name.includes("lazanya")) {
    return "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/07/lazanya-yemekcom.jpg";
  }

  // Deniz Ürünleri
  if (name.includes("balık")) {
    return "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/04/izgara-balik-yemekcom.jpg";
  }
  if (name.includes("karides")) {
    return "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/04/karides-yemekcom.jpg";
  }
  if (name.includes("midye")) {
    return "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/04/midye-tava-yemekcom.jpg";
  }
  if (name.includes("deniz") || category.includes("deniz")) {
    return "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/04/izgara-balik-yemekcom.jpg";
  }

  // Fast Food
  if (name.includes("burger") || name.includes("hamburger")) {
    return "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/07/tavuklu-burger-yemekcom.jpg";
  }
  if (name.includes("tost")) {
    return "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/07/tost-yemekcom.jpg";
  }
  if (name.includes("sandviç")) {
    return "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/07/sandvic-yemekcom.jpg";
  }
  if (category.includes("fast food")) {
    return "https://cdn.yemek.com/mnresize/1250/833/uploads/2015/07/tavuklu-burger-yemekcom.jpg";
  }

  const getProxied = (url: string) =>
    `https://images.weserv.nl/?url=${encodeURIComponent(url)}`;

  // Genel yedek - En güvenilir Türk yemek sitesi (Poksili)
  return getProxied(
    "https://cdn.yemek.com/mnresize/1250/833/uploads/2014/11/mercimek-corbasi-yemekcom.jpg",
  );
};

export const LazyImage: React.FC<LazyImageProps> = ({
  source,
  style,
  placeholder,
  fallback,
  foodName,
  foodCategory,
}) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const handleLoad = () => {
    console.log(
      `[LazyImage] ✅ SUCCESS: ${foodName || "Unknown"} - ${source.uri}`,
    );
    setLoading(false);
    setError(false);
  };

  const handleError = () => {
    console.log(
      `[LazyImage] ❌ ERROR: ${foodName || "Unknown"} - ${source.uri}`,
    );
    setLoading(false);
    setError(true);
  };

  return (
    <View style={style}>
      {(loading || error) && (
        <View style={[style, styles.placeholder]}>
          {error ? (
            <ExpoImage
              source={{ uri: getFallbackImage(foodName, foodCategory) }}
              style={style}
              contentFit="cover"
            />
          ) : (
            placeholder || (
              <SkeletonLoader width="100%" height="100%" borderRadius={0} />
            )
          )}
        </View>
      )}
      <ExpoImage
        source={source}
        style={[style, loading ? { opacity: 0 } : { opacity: 1 }]}
        onLoad={handleLoad}
        onError={handleError}
        transition={300}
        placeholder="blur"
        recyclingKey={source.uri}
        cachePolicy="memory-disk"
        contentFit="cover"
      />
    </View>
  );
};

const styles = {
  placeholder: {
    backgroundColor: Colors.light.background,
    justifyContent: "center" as const,
    alignItems: "center" as const,
  },
};
