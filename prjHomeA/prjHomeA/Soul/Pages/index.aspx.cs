using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using MySql.Data.MySqlClient;

namespace prjHomeA.Soul.Pages
{
    public partial class index : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            string Login = Request["l"].ToString();
            if (Login == "" || Login == null)
            {
                return;

            }
            string Password = Request["p"].ToString();
            if (Password == "" || Password == null)
            {
                return;

            }

            DataBase Banco = new DataBase();
            Banco.openBar("localhost", "root", "root", "HomeA");
            Banco.getCommand("");

            while (Banco.Selected.Read()){
                if (Banco.Selected["nm_email_usuario"].ToString() == Login && Banco.Selected["nm_senha_usuario"].ToString() == Password)
                {
                    string Apart = Banco.Selected["cd_apartemanto"].ToString();
                    string CD = Banco.Selected["cd_condominio"].ToString();
                    string Type = Banco.Selected["cd_tipo_usuario"].ToString();
                    string Name = Banco.Selected["nm_usuario"].ToString();
                    string CALLBAKU = CD + Type + Apart + Name;

                    Response.Write(CALLBAKU);

                } else {
                    Response.Write(null);

                }

            }

        }
    }
}