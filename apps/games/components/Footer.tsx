import { ChainId } from '@pancakeswap/chains'
import { languageList, useTranslation } from '@pancakeswap/localization'
import { footerLinks } from '@pancakeswap/uikit'
import Footer from '@pancakeswap/uikit/components/Footer'
import { useCakePrice } from 'hooks/useCakePrice'
import { useTheme } from 'next-themes'
import { useMemo } from 'react'

const FooterPage = () => {
  const { setTheme, resolvedTheme } = useTheme()
  const { currentLanguage, setLanguage, t } = useTranslation()
  const { data: cakePrice } = useCakePrice()

  const isDark = resolvedTheme === 'dark'

  const toggleTheme = useMemo(() => {
    return () => setTheme(isDark ? 'light' : 'dark')
  }, [setTheme, isDark])

  const getFooterLinks = useMemo(() => {
    return footerLinks(t)
  }, [t])

  return (
    <Footer
      chainId={ChainId.BSC}
      items={getFooterLinks}
      isDark={isDark}
      toggleTheme={toggleTheme}
      langs={languageList}
      setLang={setLanguage}
      currentLang={currentLanguage.code}
      cakePriceUsd={cakePrice ? Number(cakePrice) : undefined}
      buyCakeLabel={t('Buy $WIZ')}
      buyCakeLink="https://wiztoken.io/"
    />
  )
}

export default FooterPage
