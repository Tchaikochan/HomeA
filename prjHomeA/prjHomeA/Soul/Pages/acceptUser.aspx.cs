using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using MySql.Data.MySqlClient;

namespace prjHomeA.Soul.Pages
{
    public partial class acceptUser : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            DataBase Banker = new DataBase();

            string Condominio = Request["c"];
            if (Condominio == "" || Condominio == null)
            {
                return;

            }
            string Requester = Request["v"];
            if (Requester == "" || Requester == null)
            {
                return;

            }
            string Email = Request["em"];
            if (Email == "" || Email == null)
            {
                return;

            }

            Banker.openBar("localhost", "root", "root", "HomeA");
            if (Requester == "true")
            {
                Banker.getCommand("SELECT * FROM Usuario WHERE nm_email_usuario = '" + Email + "'");
                Banker.Selected.Read();
                if (Banker.Selected["cd_tipo_usuario"].ToString() == "4")
                {
                    Banker.Refresh();
                    Banker.openBar("localhost", "root", "root", "HomeA");
                    Banker.setCommand("UPDATE Usuario SET cd_tipo_usuario = 0 WHERE nm_email_usuario = '" + Email + "'");
                    Banker.Refresh();

                }
                else if (Banker.Selected["cd_tipo_usuario"].ToString() == "5")
                {
                    Banker.Refresh();
                    Banker.openBar("localhost", "root", "root", "HomeA");
                    Banker.setCommand("UPDATE Usuario SET cd_tipo_usuario = 1 WHERE nm_email_usuario = '" + Email + "'");
                    Banker.Refresh();

                }
                else if (Banker.Selected["cd_tipo_usuario"].ToString() == "6")
                {
                    Banker.Refresh();
                    Banker.openBar("localhost", "root", "root", "HomeA");
                    Banker.setCommand("UPDATE Usuario SET cd_tipo_usuario = 2 WHERE nm_email_usuario = '" + Email + "'");
                    Banker.Refresh();

                }
                else if (Banker.Selected["cd_tipo_usuario"].ToString() == "7")
                {
                    Banker.Refresh();
                    Banker.openBar("localhost", "root", "root", "HomeA");
                    Banker.setCommand("UPDATE Usuario SET cd_tipo_usuario = 3 WHERE nm_email_usuario = '" + Email + "'");
                    Banker.Refresh();

                }

            }
            else
            {
                Banker.setCommand("DELETE FROM Usuario WHERE nm_email_usuario = '" + Email + "'");
                Banker.Refresh();

            }
            
        }
    }
}