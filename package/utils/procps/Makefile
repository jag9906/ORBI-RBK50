#
# Copyright (C) 2006 OpenWrt.org
#
# This is free software, licensed under the GNU General Public License v2.
# See /LICENSE for more information.
#
include $(TOPDIR)/rules.mk
PKG_NAME:=procps
PKG_VERSION:=3.2.8
PKG_RELEASE:=1
PKG_SOURCE:=$(PKG_NAME)-$(PKG_VERSION).tar.gz
PKG_SOURCE_URL:=http://procps.sourceforge.net
PKG_MD5SUM:=f490bca772b16472962c7b9f23b1e97d
include $(INCLUDE_DIR)/package.mk
define Package/procps
  SECTION:=utils
  CATEGORY:=Utilities
  DEPENDS:=+libncurses
  TITLE:=proc utilities
  URL:=http://sourceforge.net/projects/procps/
endef

define Package/procps/description
	procps is the package that has a bunch of small useful utilities that give
	information about processes using the /proc filesystem. The package
	includes the programs ps, top, vmstat, w, kill, free, slabtop, and skill.
endef

MAKE_FLAGS += \
        CFLAGS="$(TARGET_CFLAGS)" \
        CPPFLAGS="$(TARGET_CPPFLAGS)" \
        LDFLAGS="$(TARGET_LDFLAGS)"

# just for RC debug, forbid to use in code
define Package/procps/install
	$(INSTALL_DIR) $(1)/__rd_debug_only/usr/bin
	$(INSTALL_BIN) $(PKG_BUILD_DIR)/free $(1)/__rd_debug_only/usr/bin/
	$(INSTALL_BIN) $(PKG_BUILD_DIR)/ps/ps $(1)/__rd_debug_only/usr/bin
	$(INSTALL_BIN) $(PKG_BUILD_DIR)/pgrep $(1)/__rd_debug_only/usr/bin
	$(INSTALL_BIN) $(PKG_BUILD_DIR)/pkill $(1)/__rd_debug_only/usr/bin
	$(INSTALL_BIN) $(PKG_BUILD_DIR)/pmap $(1)/__rd_debug_only/usr/bin
	$(INSTALL_BIN) $(PKG_BUILD_DIR)/pwdx $(1)/__rd_debug_only/usr/bin
	$(INSTALL_BIN) $(PKG_BUILD_DIR)/skill $(1)/__rd_debug_only/usr/bin
	$(INSTALL_BIN) $(PKG_BUILD_DIR)/slabtop $(1)/__rd_debug_only/usr/bin
	$(INSTALL_BIN) $(PKG_BUILD_DIR)/snice $(1)/__rd_debug_only/usr/bin
	$(INSTALL_BIN) $(PKG_BUILD_DIR)/tload $(1)/__rd_debug_only/usr/bin
	$(INSTALL_BIN) $(PKG_BUILD_DIR)/top $(1)/__rd_debug_only/usr/bin/
	$(INSTALL_BIN) $(PKG_BUILD_DIR)/vmstat $(1)/__rd_debug_only/usr/bin
	$(INSTALL_BIN) $(PKG_BUILD_DIR)/w $(1)/__rd_debug_only/usr/bin
	$(INSTALL_BIN) $(PKG_BUILD_DIR)/watch $(1)/__rd_debug_only/usr/bin
	$(INSTALL_DIR) $(1)/usr/lib
	$(INSTALL_BIN) $(PKG_BUILD_DIR)/proc/libproc-$(PKG_VERSION).so $(1)/usr/lib/
endef

$(eval $(call BuildPackage,procps))

